
//update this array here for updating the list.
const links = [
    {   type: 'Programming',
        link: 'https://www.youtube.com/watch?v=VMiCE3Xx6cc&list=PLhQjrBD2T381GoWDSziZYoaK7CY9JXtWK&ab_channel=CS50CS50Verified',
        descrip:' CS50 playlists ',
        btnName: 'CS50 youtube'
    },
    {   type:'Algorithms',
        link:'https://www.youtube.com/playlist?list=PL2SOU6wwxB0uP4rJgf5ayhHWgw7akUWSf',    
        descrip:'Advanced Algorithms Youtube Playlist by harvard university',
        btnName:'advanced algos(COMPSCI 224)'
    },
    {   type:'Discrete Maths',
        link:'https://www.youtube.com/playlist?list=PLB7540DEDD482705B',    
        descrip:'MIT 6.042J Mathematics for Computer Science, Fall 2010',
        btnName:'Playlist'
    },
    {   type:'ISRO',
        link:'https://www.geeksforgeeks.org/isro-original-papers-official-keys/',    
        descrip:'ISRO GFG PAPERS for ISRO',
        btnName:'official keys'
    },
    {   type:'',
        link:'https://www.geeksforgeeks.org/isro-cs-preparation/',    
        descrip:'ISRO CS PREPARATION',
        btnName:'ISRO CS'
    },
        {   type:'',
        link:'https://www.geeksforgeeks.org/gate-cs-notes-gq/',    
        descrip:'ISRO NOTES',
        btnName:'GATE notes'
    },
        {   type:'DSA',
        link:'https://timroughgarden.org/videos.html',    
        descrip:'Tim Roughgarden\'s Online Courses',
        btnName:'courses list website'
    },
        {   type:'',
        link:'https://practice.geeksforgeeks.org/batch/DSA-Workshop/',    
        descrip:'GFG DSA WORKSHOP(VALID TILL 31st DECEMBER)',
        btnName:'GFG PRACTICE'
    }

    
    
];


for(var i = 0; i < links.length; i++) {
    document.getElementsByClassName('mytable')[0].innerHTML += '<tr><th class="t">' + links[i].type + '</th></tr><tr><td></td><td><a target="_blank" href="' + links[i].link +'">'+ links[i].btnName + '</a></td><td>'+ links[i].descrip + '</td></tr>';
}
