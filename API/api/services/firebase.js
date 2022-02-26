import admin from "firebase-admin";

import serviceAccount from "../../credentials/travel-blog-kosova-firebase-adminsdk-gmd89-9bd1cf5312.json";

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
});

export default admin;
