const urlParams = new URLSearchParams(window.location.search);
   const myParam = urlParams.get('myParam');

   function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
   var msg = getParameterByName('msg'); 

   if(msg == "succ"){
    Swal.fire({
    type: 'success',
    text: 'Termin uspešno rezerviran.',
    },
    function(){
        window.location = "namizje.html";
    });

   }