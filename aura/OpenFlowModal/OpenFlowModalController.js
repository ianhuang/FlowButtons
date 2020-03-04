({
    doInit : function(component, event, helper) {
        var flow = component.find("flowData");
        var inputVariables = [
            { name : "recordId", type : "String", value: component.get("v.recordId") },
        ];
        var flowName = component.get("v.flowName");    
        flow.startFlow(flowName, inputVariables);
	},
    
    onFlowStatusChange : function(component, event, helper) {
        if(event.getParam("status") === "FINISHED") {
            var outputVariables = event.getParam("outputVariables");
            if(outputVariables != null) {
                var outputVar;
                for(var i = 0; i < outputVariables.length; i++) {
                    outputVar = outputVariables[i];
                    if(outputVar.name === 'errorMessage' && outputVar.value != null && outputVar.value != '') {
                        helper.showError(component, outputVar.value);                         
                    }
                }
            }
            
            var successMessage = component.get("v.successMessage");
            if(successMessage != null) { 
                helper.showSuccess(component, successMessage);
            }
            var refreshParentForm = component.get("v.refreshParentForm"); 
            if(refreshParentForm) {
                $A.get('e.force:refreshView').fire();
            }    
            component.find("overlayLib").notifyClose();
        }   
	},
})
