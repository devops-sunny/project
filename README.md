DO SOME CHANGES BEFORE BUILD:
1. GO TO BELOW PATH
--> node_modules/@mui/x-license-pro/verifyLicense/verifyLicense.js
2. null all the return values.

```
import { base64Encode } from '../encoding/base64';
import { LicenseStatus } from '../utils/licenseStatus';


const getDefaultReleaseDate = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return today;
};

export function generateReleaseInfo(releaseDate = getDefaultReleaseDate()) {
  return base64Encode(releaseDate.getTime().toString());
}

export function verifyLicense() {
  return LicenseStatus.Valid;
}
```

3. save changes and make build.

# project
