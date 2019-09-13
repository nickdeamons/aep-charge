class User {
  constructor(name = 'dude', username = 'nickstester', id = 1) {
   this.name = name;
   this.username = username;
   this.id = id;
   this.primaryAccount = '';
   this.accounts = [];
   this.primaryInfo = {};
  }
  /***
   * @Function pushes a new account to the array of accounts
   * 
   */
  addNewAccount(account) {
    if(!this.hasAccountOfType(account.type)) {
      this.accounts.push(account);
    } else {
      console.log('User has this account type already');
    }
  }
  /***
   * @Function check if user has an account of a type flag
   * 
   */
  hasAccountOfType(accountType) {
    let hasIt = false;
    this.accounts.map((account, index) => {
      if(account.type === accountType) {
        hasIt = true; 
      }
    })
    return hasIt;
  }

   /***
   * @Function deletes account of type from user
   * 
   */
  deleteAccountFromUser(accountType) {
    this.accounts = this.accounts.filter((account) => {
      return account.type !== accountType;
    })
  }

  /** @Function sets the primary account type */

  setPrimaryAccount(accountType) {
    this.primaryAccount = accountType;
  }

  /** @Function populates a shallow object of quickly accessible basic information from a chosen primary account */

  populateFromPrimaryAccount() {
    this.primaryInfo = this.accounts.find((account) => {
      return account.type === this.primaryAccount;
    })
  }

}

export default User;