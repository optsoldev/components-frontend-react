# OPTSOL components library for React

---

## [Live Storybook](https://optsoldev.github.io/components-frontend-react/)

### **Setup**

    yarn install

---

### **Development mode**

In packages/optsol-react:

      npm run watch

In examples/storybook:

      npm start

In examples/side-layout:

      npm start

---

### **Add new package:**

    npx lerna add react-table --scope @optsol/react
    npx lerna add @types/react-table --scope @optsol/react --dev

---

### **Package:**

    npm run package

A new tgz file will be generated in packages/optsol-react

---

### **Publish**

In packages/optsol-react:

      npm publish

---

### **Publish live storybook**

In examples/storybook:

      npm run predeploy
      npm run deploy-storybook

---

### **When "No matching version found for @optsol/react@X.X.X" try running:**

      npx lerna link --force-local
