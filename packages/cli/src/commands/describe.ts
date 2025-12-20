import yanse from 'yanse';
import { CLIOptions, Inquirerer, Question } from 'inquirerer';
import { KubernetesClient } from 'kubernetesjs';
import { ParsedArgs } from 'minimist';

import { getCurrentNamespace } from '../config';

async function promptResourceType(prompter: Inquirerer, argv: Partial<ParsedArgs>): Promise<string> {
  const resourceTypes = [
    'pod', 
    'service', 
    'deployment', 
    'replicaset', 
    'statefulset', 
    'daemonset', 
    'configmap', 
    'secret', 
    'namespace'
  ];

  const question: Question = {
    type: 'autocomplete',
    name: 'resourceType',
    message: 'Select resource type',
    options: resourceTypes,
    maxDisplayLines: 10,
    required: true
  };

  const { resourceType } = await prompter.prompt(argv, [question]);
  return resourceType;
}

async function promptResourceName(
  prompter: Inquirerer, 
  argv: Partial<ParsedArgs>, 
  resourceType: string, 
  namespace: string,
  client: KubernetesClient
): Promise<string> {
  let resources: any[] = [];
  
  switch (resourceType) {
  case 'pod':
    const pods = await client.listCoreV1NamespacedPod({
      path: { namespace },
      query: { limit: 100 }
    });
    resources = pods.items || [];
    break;
      
  case 'service':
    const services = await client.listCoreV1NamespacedService({
      path: { namespace },
      query: { limit: 100 }
    });
    resources = services.items || [];
    break;
      
  case 'deployment':
    const deployments = await client.listAppsV1NamespacedDeployment({
      path: { namespace },
      query: { limit: 100 }
    });
    resources = deployments.items || [];
    break;
      
  default:
    console.log(yanse.yellow(`Resource type '${resourceType}' not implemented yet for selection`));
    return '';
  }
  
  if (resources.length === 0) {
    console.log(yanse.yellow(`No ${resourceType}s found in namespace ${namespace}`));
    return '';
  }
  
  const options = resources.map(r => ({
    name: r.metadata.name,
    value: r.metadata.name
  }));
  
  const question: Question = {
    type: 'autocomplete',
    name: 'resourceName',
    message: `Select ${resourceType} name`,
    options,
    maxDisplayLines: 10,
    required: true
  };
  
  const { resourceName } = await prompter.prompt(argv, [question]);
  return resourceName;
}

function describePod(pod: any): void {
  console.log(yanse.bold(`Name:         ${pod.metadata.name}`));
  console.log(yanse.bold(`Namespace:    ${pod.metadata.namespace}`));
  console.log(yanse.bold(`Priority:     ${pod.spec.priority || 0}`));
  console.log(yanse.bold(`Node:         ${pod.spec.nodeName || '<none>'}`));
  console.log(yanse.bold(`Start Time:   ${pod.status.startTime || '<unknown>'}`));
  
  console.log(yanse.bold('\nLabels:'));
  if (pod.metadata.labels) {
    Object.entries(pod.metadata.labels).forEach(([key, value]) => {
      console.log(`  ${key}=${value}`);
    });
  }
  
  console.log(yanse.bold('\nStatus:       ' + pod.status.phase));
  console.log(yanse.bold('IP:           ' + pod.status.podIP));
  
  console.log(yanse.bold('\nContainers:'));
  if (pod.spec.containers) {
    pod.spec.containers.forEach((container: any) => {
      console.log(yanse.bold(`  ${container.name}:`));
      console.log(`    Image:      ${container.image}`);
      console.log(`    Ports:      ${container.ports?.map((p: any) => p.containerPort).join(', ') || '<none>'}`);
      
      const status = pod.status.containerStatuses?.find((s: any) => s.name === container.name);
      if (status) {
        console.log(`    Ready:      ${status.ready}`);
        console.log(`    Restarts:   ${status.restartCount}`);
        
        const stateEntries = Object.entries(status.state || {});
        if (stateEntries.length > 0) {
          const [state, details] = stateEntries[0];
          console.log(`    State:      ${state}`);
          if (details && typeof details === 'object') {
            Object.entries(details).forEach(([key, value]) => {
              console.log(`      ${key}: ${value}`);
            });
          }
        }
      }
      
      console.log('');
    });
  }
  
  console.log(yanse.bold('Events:'));
  console.log('  <Events not available in this implementation>');
}

function describeService(service: any): void {
  console.log(yanse.bold(`Name:              ${service.metadata.name}`));
  console.log(yanse.bold(`Namespace:         ${service.metadata.namespace}`));
  console.log(yanse.bold(`Labels:            ${JSON.stringify(service.metadata.labels || {})}`));
  console.log(yanse.bold(`Selector:          ${JSON.stringify(service.spec.selector || {})}`));
  console.log(yanse.bold(`Type:              ${service.spec.type}`));
  console.log(yanse.bold(`IP:                ${service.spec.clusterIP}`));
  
  if (service.spec.ports) {
    console.log(yanse.bold('\nPorts:'));
    service.spec.ports.forEach((port: any) => {
      console.log(`  ${port.name || '<unnamed>'}: ${port.port}/${port.protocol} -> ${port.targetPort}`);
    });
  }
  
  console.log(yanse.bold('\nSession Affinity: ' + (service.spec.sessionAffinity || 'None')));
  
  console.log(yanse.bold('\nEvents:'));
  console.log('  <Events not available in this implementation>');
}

function describeDeployment(deployment: any): void {
  console.log(yanse.bold(`Name:               ${deployment.metadata.name}`));
  console.log(yanse.bold(`Namespace:          ${deployment.metadata.namespace}`));
  console.log(yanse.bold(`CreationTimestamp:  ${deployment.metadata.creationTimestamp}`));
  console.log(yanse.bold(`Labels:             ${JSON.stringify(deployment.metadata.labels || {})}`));
  console.log(yanse.bold(`Annotations:        ${JSON.stringify(deployment.metadata.annotations || {})}`));
  console.log(yanse.bold(`Selector:           ${JSON.stringify(deployment.spec.selector.matchLabels || {})}`));
  console.log(yanse.bold(`Replicas:           ${deployment.status.replicas || 0} desired | ${deployment.status.updatedReplicas || 0} updated | ${deployment.status.readyReplicas || 0} ready | ${deployment.status.availableReplicas || 0} available`));
  console.log(yanse.bold(`StrategyType:       ${deployment.spec.strategy.type}`));
  
  if (deployment.spec.template && deployment.spec.template.spec.containers) {
    console.log(yanse.bold('\nContainers:'));
    deployment.spec.template.spec.containers.forEach((container: any) => {
      console.log(yanse.bold(`  ${container.name}:`));
      console.log(`    Image:      ${container.image}`);
      console.log(`    Ports:      ${container.ports?.map((p: any) => p.containerPort).join(', ') || '<none>'}`);
      console.log(`    Environment: ${container.env?.map((e: any) => `${e.name}=${e.value}`).join(', ') || '<none>'}`);
      console.log('');
    });
  }
  
  if (deployment.status.conditions) {
    console.log(yanse.bold('\nConditions:'));
    console.log(yanse.bold('  Type           Status  Reason'));
    deployment.status.conditions.forEach((condition: any) => {
      console.log(`  ${condition.type.padEnd(15)}${condition.status.padEnd(8)}${condition.reason || ''}`);
    });
  }
  
  console.log(yanse.bold('\nEvents:'));
  console.log('  <Events not available in this implementation>');
}

export default async (
  argv: Partial<ParsedArgs>,
  prompter: Inquirerer,
  _options: CLIOptions
) => {
  try {
    const client = new KubernetesClient({
      restEndpoint: 'http://localhost:8001' // Default kube-proxy endpoint
    });

    const namespace = argv.n || argv.namespace || getCurrentNamespace();
    
    const resourceType = argv._?.[0] || await promptResourceType(prompter, argv);
    
    const resourceName = argv._?.[1] || await promptResourceName(prompter, argv, resourceType, namespace as string, client);
    
    if (!resourceName) {
      return;
    }
    
    console.log(yanse.blue(`Describing ${resourceType} ${resourceName} in namespace ${namespace}...`));
    
    switch (resourceType) {
    case 'pod':
      const pod = await client.readCoreV1NamespacedPod({
        path: { 
          namespace,
          name: resourceName
        },
        query: {

        }
      });
      describePod(pod);
      break;
        
    case 'service':
      const service = await client.readCoreV1NamespacedService({
        path: { 
          namespace,
          name: resourceName
        },
        query: {

        }
      });
      describeService(service);
      break;
        
    case 'deployment':
      const deployment = await client.readAppsV1NamespacedDeployment({
        path: { 
          namespace,
          name: resourceName
        },
        query: {
            
        }
      });
      describeDeployment(deployment);
      break;
        
    default:
      console.log(yanse.yellow(`Resource type '${resourceType}' not implemented yet`));
    }
  } catch (error) {
    console.error(yanse.red(`Error: ${error}`));
  }
};
