console.clear();

// analogy
// customer
// insurance co
// departments

// These are actions our customers will do (action creators in redux)
// People dropping off a form
const createPolicy = (name, amount) => {
    return {
      type: "CREATE_POLICY",
        payload: {
          name: name,
          amount: amount
      }
    }
}

const deletePolicy = (name) => {
    return {
      type: "DELETE_POLICY",
      payload: {
      name: name
    }
  }
}

const createClaim = (name, amountOfMoneyToCollect) => {
    return {
      type: "CREATE_CLAIM",
      payload: {
        name: name,
        amountOfMoneyToCollect: amountOfMoneyToCollect
     }
    }
}

// Now our company has to handle these customer actions (reducers in redux)

// claims department
const claimHistory = (oldListOfClaims = [], action) => {
  if(action.type === "CREATE_CLAIM") {
    return [...oldListOfClaims, action.payload]
  }
  return oldListOfClaims;
}
// acounting department
// assume we have 100$ initally
const accounting = (initalCompanyMoney = 100, action) => {
  if(action.type === "CREATE_POLICY") {
    return initalCompanyMoney + action.payload.amount
  } 
  else if (action.type === "CREATE_CLAIM") {
    return initalCompanyMoney - action.payload.amountOfMoneyToCollect
  }
  return initalCompanyMoney
}

const policies = (listOfPolicies = [], action) => {
  if(action.type === "CREATE_POLICY") {
    return [...listOfPolicies, action.payload.name]
  }
  else if (action.type === "DELETE_POLICY") {
    return listOfPolicies.filter(name => name !== action.payload.name)
  }
    return listOfPolicies
}
// Create Store
const { createStore, combineReducers } = Redux;

const rootReducer = combineReducers( {
  claimHistory: claimHistory,
  accounting: accounting,
  policies: policies
})
const store = createStore(rootReducer)

console.log(store.getState())

store.dispatch(createPolicy("Ulan", 50))
store.dispatch(createPolicy("Murat", 10))
store.dispatch(createClaim("Ulan", 10));
store.dispatch(deletePolicy("Murat"));

console.log(store.getState())
