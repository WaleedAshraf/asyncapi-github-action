# AsyncAPI Github Action
This action validates if asyncapi schema file is valid or not.

## Inputs

### `filepath`

**Required** Path of the asyncapi schema file. Default `"asyncapi.yaml"`.

## Example usage

```
- name: asyncapi-github-action
  uses: WaleedAshraf/asyncapi-github-action@v0.0.1
  with:
    filepath: 'asyncapi.yaml'
```
