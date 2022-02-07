const { initializeApp } = require("firebase/app");
const {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  setDoc,
  query,
  where,
} = require("firebase/firestore/lite");

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQCEd-mX6Dex7MN2gj6fmgiVpf4meOElA",
  authDomain: "expense-tracker-344e9.firebaseapp.com",
  projectId: "expense-tracker-344e9",
  storageBucket: "expense-tracker-344e9.appspot.com",
  messagingSenderId: "947341722390",
  appId: "1:947341722390:web:d54d2d9c4b2d5a0da98637",
  measurementId: "G-5FTZ6Q4LWP",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

async function getCategories(db) {
  const categoriesCol = collection(db, "categories");
  const categorySnapshot = await getDocs(categoriesCol);
  const categoryList = categorySnapshot.docs.map((doc) => doc.data());
  console.log(categoryList);
  return categoryList;
}

async function addCategory(db, data) {
  const success = await setDoc(doc(db, "categories", data), {
    name: data,
  });
  return success;
}

async function getExpenses(db) {
  const expensesCol = collection(db, "expenses");
  const expenseSnapshot = await getDocs(expensesCol);
  const expenseList = expenseSnapshot.docs.map((doc) => doc.data());
  console.log(expenseList);
  // const category = await getDoc(expenseList[0].Category)
  // console.log(category.data())
  return expenseList;
}

async function addExpense(db, data) {
    let category = null;
  const categoriesRef = collection(db, "cateogories");
  const q = query(categoriesRef, where("name", "==", data.Category))
  const catSnap = await getDocs(q);
  catSnap.forEach((doc) => {
    category = doc.id
  })


  const success = await setDoc(doc(db, "expenses", data.Merchant), {
    Merchant: data.Merchant,
    Cost: data.Cost,
    Category: category,
    Date: data.Date,
  });
  return success;
}

const express = require("express");
const app = express();
const cors = require("cors");
const { response } = require("express");

app.use(express.json());
app.use(cors());

getCategories(db);
getExpenses(db);

const expenses = [
  {
    id: 0,
    name: "Żabka",
    date: new Date(2021, 12, 9).toLocaleDateString(),
    category: "Groceries",
    cost: 24.34,
  },
  {
    id: 1,
    name: "Biedra",
    date: new Date(2021, 12, 7).toLocaleDateString(),
    category: "Groceries",
    cost: 29.34,
  },
  {
    id: 2,
    name: "Krakus",
    date: new Date(2021, 12, 21).toLocaleDateString(),
    category: "Diner",
    cost: 16.28,
  },
  {
    id: 3,
    name: "Żabka",
    date: new Date(2021, 12, 9).toLocaleDateString(),
    category: "Groceries",
    cost: 24.34,
  },
  {
    id: 4,
    name: "Biedra",
    date: new Date(2021, 12, 7).toLocaleDateString(),
    category: "Groceries",
    cost: 29.34,
  },
  {
    id: 5,
    name: "Krakus",
    date: new Date(2021, 12, 21).toLocaleDateString(),
    category: "Diner",
    cost: 16.28,
  },
  {
    id: 6,
    name: "Żabka",
    date: new Date(2021, 12, 9).toLocaleDateString(),
    category: "Groceries",
    cost: 24.34,
  },
  {
    id: 7,
    name: "Biedra",
    date: new Date(2021, 12, 7).toLocaleDateString(),
    category: "Groceries",
    cost: 29.34,
  },
  {
    id: 8,
    name: "Krakus",
    date: new Date(2021, 12, 21).toLocaleDateString(),
    category: "Diner",
    cost: 16.28,
  },
  {
    id: 0,
    name: "Żabka",
    date: new Date(2021, 12, 9).toLocaleDateString(),
    category: "Groceries",
    cost: 24.34,
  },
  {
    id: 1,
    name: "Biedra",
    date: new Date(2021, 12, 7).toLocaleDateString(),
    category: "Groceries",
    cost: 29.34,
  },
  {
    id: 2,
    name: "Krakus",
    date: new Date(2021, 12, 21).toLocaleDateString(),
    category: "Diner",
    cost: 16.28,
  },
  {
    id: 3,
    name: "Żabka",
    date: new Date(2021, 12, 9).toLocaleDateString(),
    category: "Groceries",
    cost: 24.34,
  },
  {
    id: 4,
    name: "Biedra",
    date: new Date(2021, 12, 7).toLocaleDateString(),
    category: "Groceries",
    cost: 29.34,
  },
  {
    id: 5,
    name: "Krakus",
    date: new Date(2021, 12, 21).toLocaleDateString(),
    category: "Diner",
    cost: 16.28,
  },
  {
    id: 6,
    name: "Żabka",
    date: new Date(2021, 12, 9).toLocaleDateString(),
    category: "Groceries",
    cost: 24.34,
  },
  {
    id: 7,
    name: "Biedra",
    date: new Date(2021, 12, 7).toLocaleDateString(),
    category: "Groceries",
    cost: 29.34,
  },
  {
    id: 8,
    name: "Krakus",
    date: new Date(2021, 12, 21).toLocaleDateString(),
    category: "Diner",
    cost: 16.28,
  },
];

// const db = require("./models")

const PORT = 3001;

app.get("/api/expenses", (request, response) => {
  response.json(expenses);
});
app.get("/api/expenses/:id", (request, response) => {
  const id = Number(request.params.id);
  const expense = expenses.find((e) => e.id === id);

  if (expense) {
    response.json(expense);
  } else {
    response.status(404).end();
  }
});

app.listen(3001, () => {
  console.log(`Server Running on port: ${PORT}`);
});
