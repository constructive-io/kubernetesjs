import yanse from 'yanse';
import { CLIOptions, Inquirerer, Question } from 'inquirerer';
import { KubernetesClient } from 'kubernetesjs';
import { ParsedArgs } from 'minimist';

import { getCurrentNamespace, setCurrentNamespace } from '../config';

async function promptNamespace(
  prompter: Inquirerer, 
  argv: Partial<ParsedArgs>, 
  client: KubernetesClient
): Promise<string> {
  try {
    const namespaces = await client.listCoreV1Namespace({
      query: {}
    });
    
    if (!namespaces.items || namespaces.items.length === 0) {
      console.log(yanse.yellow('No namespaces found'));
      return '';
    }
    
    const options = namespaces.items.map(ns => ({
      name: ns.metadata.name,
      value: ns.metadata.name
    }));
    
    const question: Question = {
      type: 'autocomplete',
      name: 'namespace',
      message: 'Select namespace',
      options,
      maxDisplayLines: 10,
      required: true
    };
    
    const { namespace } = await prompter.prompt(argv, [question]);
    return namespace;
  } catch (error) {
    console.error(yanse.red(`Error getting namespaces: ${error}`));
    return '';
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
    
    const subcommand = argv._?.[0];
    
    if (subcommand === 'get-context') {
      const namespace = getCurrentNamespace();
      console.log(yanse.green(`Current namespace: ${namespace}`));
      return;
    }
    
    if (subcommand === 'set-context') {
      if (argv.current !== true) {
        console.error(yanse.red('Missing --current flag'));
        return;
      }
      
      let namespace = argv.namespace;
      if (!namespace) {
        namespace = await promptNamespace(prompter, argv, client);
        if (!namespace) {
          return;
        }
      }
      
      setCurrentNamespace(namespace as string);
      console.log(yanse.green(`Namespace set to "${namespace}"`));
      return;
    }
    
    console.log(yanse.blue('Available config commands:'));
    console.log('  get-context                  Display the current context');
    console.log('  set-context --current --namespace=<namespace>  Set the current namespace');
  } catch (error) {
    console.error(yanse.red(`Error: ${error}`));
  }
};
