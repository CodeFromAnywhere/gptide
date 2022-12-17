# Generative ui

generative-ui (`OperationClassification` ui-esm)



# Api reference

## `<Dataset />`

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## `<MyLayout />`

| Input      |    |    |
| ---------- | -- | -- |
| props | { pageProps: {  }, <br />nextPage: {  }, <br /> } |  |
| **Output** | `JSX.Element`   |    |



## setConfig()

| Input      |    |    |
| ---------- | -- | -- |
| apiUrl | string |  |,| disableAdmin | boolean |  |
| **Output** |    |    |



## 📄 Dataset (exported const)

## 📄 MyLayout (exported const)

## 📄 setConfig (exported const)

# Internal

<details><summary>Show internal (17)</summary>
    
  # `<Menu />`




| Input      |    |    |
| ---------- | -- | -- |
| props | { projectRelativeFilePath: string, <br />folderPath?: string, <br />filename?: string, <br />isFolder?: boolean, <br />navigation: `FolderContent`[], <br />contextualPromptsObject: {  }, <br />fileContextualPromptResults?: `ContextualPromptResult`[], <br />thePrompts: `ContextualPrompt`[], <br />selectionContextualPromptResults?: `ContextualPromptResult`[], <br /> } |  |
| **Output** | `JSX.Element`   |    |



## `<NavButton />`

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## `<PromptButton />`

| Input      |    |    |
| ---------- | -- | -- |
| props | { item: `ContextualPrompt`, <br />markdown: string, <br />projectRelativeFilePath: string, <br /> } |  |
| **Output** | `JSX.Element`   |    |



## `<ReaderPage />`

| Input      |    |    |
| ---------- | -- | -- |
| props | `ReaderProps` |  |
| **Output** | `JSX.Element`   |    |



## `<SelectionPrompts />`

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## useAdmin()

Useful hook to make a static site dynamic for administrator


| Input      |    |    |
| ---------- | -- | -- |
| projectRelativeFilePath | string |  |
| **Output** | { isAdminActive: boolean, <br />isLoading?: boolean, <br />refetch?: {  }, <br /> }   |    |



## useVariantResult()

| Input      |    |    |
| ---------- | -- | -- |
| fileContextualPromptResults (optional) | {  } |  |
| **Output** |    |    |



## `<VariantSelector />`

| Input      |    |    |
| ---------- | -- | -- |
| props | { projectRelativeFilePath: string, <br />folderPath: string, <br />isFolder: boolean, <br />filename?: string, <br />contextualPromptResults?: `ContextualPromptResult`[], <br /> } |  |
| **Output** | `JSX.Element`   |    |



## 📄 Menu (exported const)

## 📄 NavButton (exported const)

## 📄 PromptButton (exported const)

## 📄 ReaderPage (exported const)

## 📄 SelectionPrompts (exported const)

## 📄 { StoreProvider, useStore } (exported const)

## 📄 useAdmin (exported const)

Useful hook to make a static site dynamic for administrator


## 📄 useVariantResult (exported const)

## 📄 VariantSelector (exported const)

  </details>

