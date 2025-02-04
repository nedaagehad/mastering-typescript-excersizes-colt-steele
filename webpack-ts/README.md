# **TypeScript & Webpack**

This project is a **practice setup** for using **TypeScript** with **Webpack**. It also serves as a **_deep dive_** into **manually configuring Webpack** for bundling TypeScript projects.

>Disclaimer: This project was created to apply the knowledge acquired from the [Mastering TypeScript course by Colt Steele](https://www.udemy.com/course/learn-typescript/?srsltid=AfmBOorbK7LGB_DGyayFmk6yFc-6nxY7UvoM6YZTvjlnqsRZYPqPjU0R&couponCode=ST5MT020225CROW).

---

## **Project Setup Timeline**

### **1️⃣ Initialize TypeScript Configuration**

Create a default `tsconfig.json` using the following command:

```powershell
tsc --init
```

> **Note:** The above command requires **TypeScript** to be installed globally. If you haven’t installed it yet, use:

```powershell
npm install -g typescript
```

---

### **2️⃣ Configure TypeScript (`tsconfig.json`)**

Modify `tsconfig.json` to match your project requirements:

```json
{
  "compilerOptions": {
    "target": "es2016",
    "module": "CommonJS",
    "moduleResolution": "node",
    "types": ["node"],
    "sourceMap": true,
    "outDir": "./dist",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  },
  "include": ["./src", "webpack.config.ts", "webpack.prod.ts"],
  "exclude": ["node_modules"]
}
```

> **Why CommonJS instead of ESNext?**
> Webpack relies on **ts-node** to execute TypeScript-based configuration files (like `webpack.config.ts`), and `ts-node` is configured to **only support CommonJS**.

---

### **3️⃣ Initialize the Project**

Run the following command to create a `package.json` file:

```powershell
npm init -y
```

---

### **4️⃣ Create TypeScript Files**

Organize your source files inside the `src/` directory:

```
📦src
 ┣ 📜Dog.ts
 ┣ 📜index.ts
 ┣ 📜ShelterDog.ts
 ┗ 📜utils.ts
```

---

### **5️⃣ Install Lodash & Type Definitions**

```powershell
npm install lodash
npm install --save-dev @types/lodash
```

---

### **6️⃣ Install Webpack & Dependencies**

```powershell
npm install --save-dev typescript webpack webpack-cli ts-node ts-loader webpack-dev-server html-webpack-plugin @types/node @types/webpack @types/webpack-dev-server
```

---

### **7️⃣ Configure Webpack for Development**

Create **[`webpack.config.ts`](webpack.config.ts)** for development.
This configuration **uses `webpack-dev-server`** to serve the project **in-memory** without actually creating a bundled file.

To use this setup, add the following script to **[`package.json`](package.json)**:

```json
"scripts": {
  "serve": "webpack serve"
}
```

> This will launch a development server that bundles and serves files on demand.

---

### **8️⃣ Configure Webpack for Production**

Create **[`webpack.prod.ts`](webpack.prod.ts)** for the production build.

To build the project, add the following script to **[`package.json`](package.json)**:

```json
"scripts": {
  "build": "webpack --config webpack.prod.ts"
}
```

> This command runs Webpack with the production configuration and outputs optimized assets.

#### **Handling Hashed Bundles in Production**

Each time Webpack builds the project, it generates a bundled JavaScript file with a **dynamic content hash** (e.g., `bundle.a1b2c3.js`).

**Problem:**
A static `index.html` file cannot reference the dynamically hashed script file.

**Solution:**
Use `HtmlWebpackPlugin`, which automatically **generates a new `index.html` file** with the correct script reference.

---

## **Final Thoughts**

This project demonstrates how to manually configure **TypeScript + Webpack**, including:

✅ Setting up TypeScript (`tsconfig.json`).

✅ Installing and configuring Webpack.

✅ Using `webpack-dev-server` for development.

✅ Managing dynamic hashed bundle filenames with `HtmlWebpackPlugin`.

<br>

🚀 **Now you’re ready to dive deeper into optimizing and extending your Webpack setup!**
