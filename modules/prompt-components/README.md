# Prompt components

prompt-components (`OperationClassification` ui-esm)



# Api reference

## useSelectionPromptsMenu()

Provides the props needed to render a context-menu that allows you to add prompts and other things into your database. All actions require api access.


| Input      |    |    |
| ---------- | -- | -- |
| selectionPrompts | `ContextualPrompt`[] |  |,| contextualContent | `ContextualContent` |  |
| **Output** | { renderContextMenu: {  }, <br />openContextMenuProps: { ref: { current?: ul / , <br /> }, <br />onContextMenu: {  }, <br />onTouchStart: {  }, <br />onTouchEnd: {  }, <br />onClick: {  }, <br />style: `React.CSSProperties`, <br /> }, <br />onClose: {  }, <br />isOpen: boolean, <br /> }   |    |



## 📄 useSelectionPromptsMenu (exported const)

Provides the props needed to render a context-menu that allows you to add prompts and other things into your database. All actions require api access.


## `<ContextualPromptResultsTab />`

Visual to show the different prompt results. Probably deprecated, probably better to show it in a more structured way.


| Input      |    |    |
| ---------- | -- | -- |
| props | { prompt_projectRelativePath: string, <br /> } |  |
| **Output** | `JSX.Element`   |    |



## `<FilePromptSelect />`

Component that shows a selectbox for different prompts that can be applied on this file


| Input      |    |    |
| ---------- | -- | -- |
| props | { items?: `ContextualPrompt`[], <br />contextContent: string, <br />context_projectRelativeFilePath?: string, <br /> } |  |
| **Output** | `JSX.Element`   |    |



## processPrompt()

Main function to process a prompt. For now it calls `processChatGptPrompt` api and shows an alert afterwards with the result. In some cases we may want to process the prompt differently, e.g. storing it in a queue.


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## usePromptResultAlert()

Recursive hook that calls its own function if you click "respond", which creates an additional item in the thread


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | {  }   |    |



## 📄 ContextualPromptResultsTab (exported const)

Visual to show the different prompt results. Probably deprecated, probably better to show it in a more structured way.


## 📄 FilePromptSelect (exported const)

Component that shows a selectbox for different prompts that can be applied on this file


## 📄 processPrompt (exported const)

Main function to process a prompt. For now it calls `processChatGptPrompt` api and shows an alert afterwards with the result. In some cases we may want to process the prompt differently, e.g. storing it in a queue.


## 📄 usePromptResultAlert (exported const)

Recursive hook that calls its own function if you click "respond", which creates an additional item in the thread
