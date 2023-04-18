const dotenv = require("dotenv");

dotenv.config();

const env = "dev"; // local | dev | production
const fbase={"type": "service_account",
"project_id": "birdseye-d200e",
"private_key_id": "6d086eb70af290ebbfddd8bf70902b6184237f6f",
"private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDtGPXz5Rd/Fle6\nGfHZWrjmQRvJF0ygQ+lRjBdjRnyG50Nbt24mVi3SXHJiN8+vSGXJJyzBcuaGcatm\n6IlwVdKOKkqlrTfZc89CoDWP2fWS0IG5CI5FICaWDYb+hQVVndxKO4gFM7Ou3fNU\nujym/ziQF+kTX+NVJbWO6ZpJfAGwEdgOgwHZ4oPY2yuE80CV4RfAXZjESNzLQzjg\nsa1rYk/Eu29YZs8/N5wIBXESvlcdYnzBckfEedUeSIMMZCchQ5fkwq8+zHc3piGr\nYrKAMHz82cnPSVY7kdZN9YsiEwpbkFOeqdzf/7lIq5EWy0tcFHZ90mAvk7T9ifWL\nc+RCG9fFAgMBAAECggEAAbaH9GKn2E23hYsxcaITquo2gq3t6kyDT4kFFD0Kokji\ndjOtko5V12q+ktIXaItL3Pew/ZbQbpE8rUop0At2sXtBvc+yExqgmTkiGe93tD9Y\naJdUu9AfJz9ixcz9PGCfGlQyx+LXPgCxhN+xl31JkdTyZKbxNAjJNoaejEBenMCI\nsOvvwk7AVPgPz4N6STVfixgTko9G3tPl+VAQBVZWFgJmWebokCmjSN4xJu9epYQ1\nr2Y9h2V48BoSs8SMkwbcy6YFJzeY9kwgpETSXG+n6waefSzg7fW5+JnihbSBvo1Y\nKdfVCWFP8no2OXkCqxLAGH4BGX5cex+jiWiIr/9UIwKBgQD8vlV3e74VjL8oguXf\n8I+m2VlVB+icNjEWPMCtz149tcVa6K5U/c3k/K6fq0tEJ6tQI/5F5NVsTADPkQfi\n4o0hDuA+Zsmiy0kAu8C2TZr3+0NpD5jwxnUSFsT/oI+saByHcnyqb5uJn7OW/L+X\nKwkJqjk9vSabuCBW+w583pd4IwKBgQDwJwTky56LGm06p5toYnYRw88wvUS3eEVV\nnj6sIee6SRbdZZQAkdyh9KTuh+CDNQzCUULYtb2jtm4xilzkgg71EomcPPpaSst0\nhfRdYEKbnYvTv8K4zjxunXOE+CvO6nvKcwEy3Wo6C9KQCJ4lJKdQCmurgQuGOKR2\nzOlFlLU69wKBgFLcW8zWZtVN1YYElDS8+3uqGl2EQECmi6VMuabCK5VzuIY7bpwy\nsYP3S5DRadWoY8PcaQqlIUtmB4YFeF5sA/TomaAbttOGbiKta1rZSosud0VEddHK\nXqtVh7R/AVt2rpPBdxmxiX6vOwOvTWjUFRx0EFwrXTMERKX/nRpXJ7WdAoGBAJux\nMEMEn2yfXWFBeEdcTh+GSrTWf85ScuDnDsqZ0Jm8+M3gJOuZpOh6qtLZ1Hw70GHK\nPQQyDxgsFZSYl1Ct4PSRaBWaktQm2XBZx+shlQ0+PoCxOZSGYDd2bIYwPnaPHmJJ\n3OUVFuE6+O/YJm7+LFp/5v3xU39ZCYbbogAyQKxRAoGAYBc8wNKXlu6bKUDYHcwf\nXLlTwumCfULDUdtxFcFfYffWYJbSI1ShbllrMRe6jAgbQqMgOve27bLXnDTFilk5\nc5THaGPICYhFQT2IAW/d9yhvfhZxRV6OsgttDUHe2s9DRpZd+hRBNB+urzQPZ7Rr\n+5ASqM5pWXGhH+G2a7mfSEs=\n-----END PRIVATE KEY-----\n",
"client_email": "firebase-adminsdk-miyp0@birdseye-d200e.iam.gserviceaccount.com",
"client_id": "114890272679486832173",
"auth_uri": "https://accounts.google.com/o/oauth2/auth",
"token_uri": "https://oauth2.googleapis.com/token",
"auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
"client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-miyp0%40birdseye-d200e.iam.gserviceaccount.com"}

const app = {
    port: parseInt(process.env.PORT) || 5000,
    firebaseAccountInfo: fbase
      
};

const config = {
    local: { app, db: { uri: process.env.LOCAL_URI } },
    dev: { app, db: { uri: process.env.DEV_URI } },
    production: { app, db: { uri: process.env.PRODUCTION_URI } }
};

module.exports = config[env || "dev" ];
