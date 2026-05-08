class DeveloperWebsite {
  public websiteName: string;
  public developerName: string;
  private _password: string;
  protected companyName: string;

  constructor(
    websiteName: string,
    developerName: string,
    _password: string,
    companyName: string,
  ) {
    this.websiteName = websiteName;
    this.developerName = developerName;
    this._password = _password;
    this.companyName = companyName;
  }
  getPassword() {
    return this._password;
  }
}

class JuniorDeveloper extends DeveloperWebsite {
  getCompanyName() {
    return this.companyName;
  }
}
const developerWebsite = new DeveloperWebsite(
  "Food Delivery",
  "Haridas Sarker",
  "haridas123",
  "Aiclient",
);
console.log(developerWebsite);
console.log("Get Password  =>", developerWebsite.getPassword());

const juniorDeveloper = new JuniorDeveloper(
  "Food Delivery",
  "Haridas Sarker",
  "haridas123",
  "Aiclient",
);
console.log(juniorDeveloper.getCompanyName());
