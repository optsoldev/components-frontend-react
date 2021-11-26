## OPTSOL components library for React

----------  

## **Setup**
    npm run setup

----------  

### **Development mode**
  In optsol/react:  
  
      npm start      

  In optsol/react:  
  
      npm start

  In examples/side-layout:
  
      npm start

----------  

### **Add new package:**
    npx lerna add react-table --scope @optsol/react
    npx lerna add @types/react-table --scope @optsol/react --dev

----------  

### **Package:**
    npm run package
  A new tgz file will be generated in packages/optsol-react

----------  

### **Publish**
  Inside packages/optsol-react:
      
      npm publish

----------  

### **When "No matching version found for @optsol/react@X.X.X" try running:**
      npx lerna link --force-local
