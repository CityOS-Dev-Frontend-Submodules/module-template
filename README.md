# {NAME} Module


## Usage

To add the shared module to your frontend project, execute the following command:

```bash
git submodule add --force {GIT_LINK} src/modules/shared
```

create .gitmodules file with 

```
[submodule "src/modules/shared"]
	path = src/modules/shared
	url = {GIT_LINK}
```

create pnpm-workspace.yaml with

```
packages:
  - ./src/modules/*
```