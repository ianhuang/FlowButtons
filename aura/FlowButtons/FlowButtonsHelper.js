({
	runFlowInModal: function(component, recordId, flowButton, callback) {
        var modalBody;
        $A.createComponent("c:OpenFlowModal", {"recordId": recordId,
                                               "flowName": flowButton.flowName, 
                                               "successMessage": flowButton.successMessage,
                                               "refreshParentForm": flowButton.refreshParentForm},
           function(content, status) {
               if (status === "SUCCESS") {
                   modalBody = content;
                   component.find('overlayLib').showCustomModal({
                       header: flowButton.buttonLabel,
                       body: modalBody,
                       showCloseButton: true,
                       cssClass: "approach-modal slds-fade-in-open",
                       closeCallback: function() {
                           if(callback) callback();
                       }
                   })
               }
         });
    }
})