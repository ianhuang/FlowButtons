({
    showSpinner : function(component) {
        var spinner = component.getSuper().find("spinner");
        $A.util.removeClass(spinner, 'slds-hide');
    },

    hideSpinner : function(component) {
        var spinner = component.getSuper().find("spinner");
        $A.util.addClass(spinner, 'slds-hide');
    },
    
    navigateRecord: function(component, event, recordId) {
        var navService = component.getSuper().find("navService");
        var pageReference = {    
           "type": "standard__recordPage",
           "attributes": {
           	  "recordId": recordId, 
           	  "actionName": "view"
           }
        }
        event.preventDefault();
        navService.navigate(pageReference);
    },

    navigateInNewTab: function(component, recordId) {
        var navService = component.getSuper().find("navService");
        var pageReference = {    
           "type": "standard__recordPage",
           "attributes": {
           	  "recordId": recordId, 
           	  "actionName": "view"
           }
        }
    
        navService.generateUrl(pageReference).then($A.getCallback(function(url) {
            //console.log('success: ' + url); 
            window.open(url, '_blank');
        }), $A.getCallback(function(error) {
            console.log('error: ' + error);
        }));
    },
    
    handleActionError : function(component, response, callback) {
        this.hideSpinner(component);
        
        var state = response.getState();
        if (state === 'INCOMPLETE') {
            this.showError(component, 'Server could not be reached. Check your internet connection.');    
        } else if (state === 'ERROR') {
            this.displayActionError(component, response);
        }
        if(callback) callback();
    },
    
    displayActionError : function(component, response, messageData, callback) {
        var message = '';
        var errors = response.getError();
        if(errors && Array.isArray(errors)) {
            for(var i=0; i < errors.length; i++) {
                for(var j=0; errors[i].pageErrors && j < errors[i].pageErrors.length; j++) {
                    message += (message.length > 0 ? '\n' : '') + errors[i].pageErrors[j].message;
                }
                if(errors[i].duplicateErrors && Array.isArray(errors[i].duplicateErrors)) {
                    for(var k=0; k<errors[i].duplicateErrors.length; k++) { 
                        message += errors[i].duplicateErrors[k].message + '\n';
                    }
        	    }
                if(errors[i].fieldErrors) {
                    for(var fieldError in errors[i].fieldErrors) {
                        var thisFieldError = errors[i].fieldErrors[fieldError];
                        for(var j=0; j < thisFieldError.length; j++) {
                            message += (message.length > 0 ? '\n' : '') + thisFieldError[j].message;
                        }
                    }
                }
                
                if(errors[i].message) {
                    message += (message.length > 0 ? '\n' : '') + errors[i].message;
                }
            }
        } else {
            message += (message.length > 0 ? '\n' : '') + 'An unknown error has occured.';
        }
        
        if(message != '') {
        	this.showError(component, message, messageData, callback);
        } else if(callback) {
            callback();
        }
    },

    showInfo : function(component, message, messageData, callback) {
        this.showToast(component, 'info', 'Info', 'dismissible', message, messageData, callback);
    },
    
    showSuccess : function(component, message, messageData, callback) {
        this.showToast(component, 'success', 'Success', 'dismissible', message, messageData, callback);
    },
    
    showError : function(component, message, messageData, callback) {
        this.showToast(component, 'error', 'Error', 'sticky', message, messageData, callback);
    },

    showWarning : function(component, message, messageData, callback) {
        this.showToast(component, 'warning', 'Warning', 'sticky', message, messageData, callback);
    },
    
    showToast : function(component, type, title, mode, message, messageData, callback) {
        component.getSuper().find('notifyLib').showToast({
            "variant": type,
            "title": title,
            "message": message,
            "mode": mode,
            "messageData": messageData,
            closeCallback: function() {
                if(callback) callback();
            }
        });
    }
   
})