import yanse from 'yanse';
import { CLIOptions, Inquirerer } from 'inquirerer';
import { KubernetesClient } from 'kubernetesjs';
import { ParsedArgs } from 'minimist';

export default async (
  _argv: Partial<ParsedArgs>,
  _prompter: Inquirerer,
  _options: CLIOptions
) => {
  try {
    const client = new KubernetesClient({
      restEndpoint: _argv.clientUrl
    });

    console.log(yanse.blue('Kubernetes cluster info:'));
    
    const apiVersions = await client.getAPIVersions({
      params: {
        
      },
      query: {
        
      }
    });
    console.log(yanse.bold('\nAPI Versions:'));
    if (apiVersions.apiVersion) {
      console.log(apiVersions.apiVersion);
    }
    
  } catch (error) {
    console.error(yanse.red(`Error: ${error}`));
  }
};
