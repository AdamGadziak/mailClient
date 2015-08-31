app.factory('apiService', function($http) {
    return {
        getEmails: function() {
            return $http.get('/emails').then(function(res) {
                return res;
            });
        },
        getSent: function() {
            return $http.get('/sent').then(function(res) {
                return res;
            });
        },
        deleteEmail: function(id) {
            return $http.delete('/emails/' + id).then(function(res) {
                return res;
            });
        },
        sendEmail: function(email) {
            email.id = Math.floor((Math.random() * 10000000) + 10000000);
            email.sent = new Date().getTime();

            return $http.post('/sent', email).then(function(res) {
                return res;
            });
        },
        setAsRead: function(id) {
            return $http.put('/emails/' + id, {
                read: true
            }).then(function(res) {
                return res;
            });
        },
        getEmail: function(id) {
            return $http.get('/emails/' + id).then(function(res) {
                return res;
            });
        }
    };
});
app.factory('intervalService', function($window, $interval) {
    var localStorage = $window.localStorage;
    var defaultInterval = 10;
    var intervalAction;
    return {
        clearIntervalAction: function() {
            $interval.cancel(intervalAction);
        },
        setIntervalAction: function(action) {
            intervalAction = action;
        },
        getRefreshInterval: function() {
            return parseInt(localStorage.interval) || defaultInterval;
        }
    };
});

