# Example
Running this example locally requires that the `'react'` and `'react-dom'` modules present in the parent directory be linked to from this one.

## Installation

1. open a terminal at the root of this project (which contains this `./example` directory)
2. `yarn install`
3. `cd node_modules`
4. `cd react`
5. `yarn link`
6. `cd ..`
7. `cd react-dom`
8. `yarn link`
9. `cd ../../example`
10. `yarn install`
11. `yarn link react`
12. `yarn link react-dom`

## Local development
1. open a terminal in this `./example` directory
2. `yarn start`
3. open http://localhost:8000 in your browser
