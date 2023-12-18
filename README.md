Initial Setup
To set up the React Native app, follow these steps:

Run the initial installation command:

bash
Copy code
npm run newclear
Running on iOS
Open Xcode and run the project. You may encounter a signing error related to the react-core package.

To resolve the signing error:

Locate the error in Xcode.
Apply your own team to the signing of the react-core package.
(Note: This issue should have been fixed, but if you encounter problems due to a missing teamId, you may need to manually set it.)
After addressing the signing issue, run the project again. You might encounter an error related to a function called "unary_function."

To resolve the "unary_function" error:

Open the error and add "__" before "unary_function" on the line causing the issue.
This is a temporary patch, and it may be addressed in future updates.
After applying the patches, run the project on iOS again. It should now run without issues.

Running on Android
To run the app on Android, use the following command:

bash
Copy code
npm run android
This command will build and launch the app on an Android emulator or connected device.

Note: If you encounter any additional issues or need further assistance, please refer to the project's documentation or seek help from the community.