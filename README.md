# jest-esm-transformer
This is a jest utility that transforms esm files into cjs, so that they can be parsed by Jest.

## Getting started 

1. `yarn add jest-esm-transformer`
2. Add this to your jest config, targetting your esm files: 

```
transform: {
   '.js': 'jest-esm-transformer',
}
```

## Credit
All the credit goes to https://github.com/onigoetz 
