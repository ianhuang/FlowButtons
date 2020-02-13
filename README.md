# FlowButtons

Business use cases:
* Execute flows from places other than standard Quick actions 
* Execute flows from button clicks in Communities.

Summary:
* JSON configuration based.
* Supports all sobjects.
* Automatically retrieves current record Id.
* Click the button to launch flow in a modal dialog.  
* Supports up to 10 buttons.
* Supports both Screen flow and Autolaunch flows.

Note: Autolaunch flows do not close automatically, recommend to use Screen flows.

JSON syntax:

Attributes:
buttonLabel - Button label
buttonVariant - Button style. Values: 'brand' or 'neutral'
flowName - Flow API name
refreshParentForm - Refreshs parent after completion. Values: true or false
successMessage - Message displayed upon success flow execution


Example:
{"buttonLabel": "Close Duplicate","buttonVariant": "neutral","flowName": "nib_TVL_Close_Child_Cases","refreshParentForm": true, "successMessage": "Duplicate case closed successfully."}
