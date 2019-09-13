class Account {
    constructor(type = 'Slack', details = {}) {
        this.type = type;
        this.details = details;
    }
    setType(type) {
        this.type = type;
    }
    getType() {
        return this.type;
    }
    addDetails(details) {
        this.details = details;
    }

    populate(type, details) {
        this.setType(type);
        this.addDetails(details);
    }
}

export default Account;