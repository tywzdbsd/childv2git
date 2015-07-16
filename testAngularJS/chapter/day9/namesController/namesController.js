/**
 * Created by tyw on 15/7/15.
 */
function namesController($scope){
    $scope.names = [
        {name:'Jani',country:'Norway'},
        {name:'Hege',country:'Sweden'},
        {name:'Kai',country:'Denmark'}
    ]
}

app.filter('filter3',function(){
    return function(items){
        angular.forEach(items,function(item){
            item = item + '!'
        });
        return items;
    }});