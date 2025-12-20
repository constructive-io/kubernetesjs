import yanse from 'yanse';
import * as fs from 'fs';
import { CLIOptions, Inquirerer, Question } from 'inquirerer';
import { KubernetesClient } from 'kubernetesjs';
import { ParsedArgs } from 'minimist';

import {readYamlFile } from '../config';

async function promptYamlFilePath(prompter: Inquirerer, argv: Partial<ParsedArgs>): Promise<string> {
  const question: Question = {
    type: 'text',
    name: 'filePath',
    message: 'Enter path to YAML file',
    required: true
  };
  
  const { filePath } = await prompter.prompt(argv, [question]);
  return filePath;
}

async function applyResource(client: KubernetesClient, resource: any, namespace: string): Promise<void> {
  const kind = resource.kind.toLowerCase();
  const name = resource.metadata?.name;
  
  if (!name) {
    throw new Error('Resource must have a name');
  }
  
  console.log(yanse.blue(`Applying ${kind} "${name}" in namespace ${namespace}...`));
  
  try {
    switch (kind) {
    case 'deployment':
      await client.createAppsV1NamespacedDeployment({
        path: { namespace },
        query: { 
          pretty: 'true',
          fieldManager: 'kubernetesjs-cli'
        },
        body: resource
      });
      console.log(yanse.green(`Deployment "${name}" created/updated successfully`));
      break;
        
    case 'service':
      await client.createCoreV1NamespacedService({
        path: { namespace },
        query: { 
          pretty: 'true',
          fieldManager: 'kubernetesjs-cli'
        },
        body: resource
      });
      console.log(yanse.green(`Service "${name}" created/updated successfully`));
      break;
        
    case 'pod':
      await client.createCoreV1NamespacedPod({
        path: { namespace },
        query: { 
          pretty: 'true',
          fieldManager: 'kubernetesjs-cli'
        },
        body: resource
      });
      console.log(yanse.green(`Pod "${name}" created/updated successfully`));
      break;
        
    case 'configmap':
      await client.createCoreV1NamespacedConfigMap({
        path: { namespace },
        query: { 
          pretty: 'true',
          fieldManager: 'kubernetesjs-cli'
        },
        body: resource
      });
      console.log(yanse.green(`ConfigMap "${name}" created/updated successfully`));
      break;
        
    case 'secret':
      await client.createCoreV1NamespacedSecret({
        path: { namespace },
        query: { 
          pretty: 'true',
          fieldManager: 'kubernetesjs-cli'
        },
        body: resource
      });
      console.log(yanse.green(`Secret "${name}" created/updated successfully`));
      break;
        
    default:
      console.log(yanse.yellow(`Resource kind "${kind}" not implemented yet`));
    }
  } catch (error) {
    console.error(yanse.red(`Error applying ${kind} "${name}": ${error}`));
    throw error;
  }
}

export default async (
  argv: Partial<ParsedArgs>,
  prompter: Inquirerer,
  _options: CLIOptions
) => {
  try {
    const client = new KubernetesClient({
      restEndpoint: argv.clientUrl
    });
    
    const filePath = argv.f || argv._?.[0] || await promptYamlFilePath(prompter, argv);
    
    if (!filePath) {
      console.error(yanse.red('No file path provided'));
      return;
    }
    
    if (!fs.existsSync(filePath)) {
      console.error(yanse.red(`File not found: ${filePath}`));
      return;
    }
    
    let resources: any[];
    try {
      const content = readYamlFile(filePath);
      
      if (Array.isArray(content)) {
        resources = content;
      } else if (content.kind === 'List' && Array.isArray(content.items)) {
        resources = content.items;
      } else {
        resources = [content];
      }
    } catch (error) {
      console.error(yanse.red(`Error parsing YAML file: ${error}`));
      return;
    }
    
    for (const resource of resources) {
      try {
        const namespace = resource.metadata?.namespace || argv.n || argv.namespace || 'default';
        await applyResource(client, resource, namespace);
      } catch (error) {
        console.error(yanse.red(`Failed to apply resource: ${error}`));
      }
    }
    
    console.log(yanse.green('Apply completed'));
  } catch (error) {
    console.error(yanse.red(`Error: ${error}`));
  }
};
