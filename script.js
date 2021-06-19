
//update this array here for updating the list.
const links = [
    {   type: 'Programming',
        link: 'https://www.youtube.com/watch?v=VMiCE3Xx6cc&list=PLhQjrBD2T381GoWDSziZYoaK7CY9JXtWK&ab_channel=CS50CS50Verified',
        descrip:' CS50 playlists ',
        btnName: 'CS50 youtube'
    },
    {   type:'',
        link:'',    
        descrip:'',
        btnName:''
    },
    {   type:'',
        link:'',    
        descrip:'',
        btnName:''
    },
    {   type:'',
        link:'',    
        descrip:'',
        btnName:''
    },
    {   type:'',
        link:'',    
        descrip:'',
        btnName:''
    }
    
    
];


for(var i = 0; i < links.length; i++) {
    document.getElementsByClassName('mytable')[0].innerHTML += '<tr><th class="t">' + links[i].type + '</th></tr><tr><td></td><td><a target="_blank" href="' + links[i].link +'">'+ links[i].btnName + '</a></td><td>'+ links[i].descrip + '</td></tr>';
}
