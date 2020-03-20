# AsyncAPI Github Action
This action validates if the AsyncaAPI schema file is valid or not.

## Inputs

### `filepath`

**Required** Path of the AsyncaAPI schema file. Default is `"asyncapi.yaml"` at root. Path starts root of github repo.
For example, if you schema is in `schemas` folder.

```
root
├── schemas
│   └── asyncapi.yaml
├── index.js
└── package.json
```

You should use `filepath: './schemas/asyncapi.yaml'`

## Example usage

```
- name: asyncapi-github-action
  uses: WaleedAshraf/asyncapi-github-action@v0
  with:
    filepath: 'asyncapi.yaml'
```
You can specify version with `@v<release-version>`. It follows semantic release. For latest release, please check [releases](https://github.com/WaleedAshraf/asyncapi-github-action/releases) page.
