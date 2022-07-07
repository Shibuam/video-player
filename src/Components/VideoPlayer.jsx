import React from 'react'
import ReactPlayer from 'react-player'
import {Button,Grid} from '@material-ui/core'
const VideoPlayer = () => {
 
    const videoDetails=[{
"name":"Data Structure",
"description":"Linked list",
"url":'https://youtu.be/15q-fLZqo_0'

    },
    {
        "name":"data Structure",
        "url":"https://youtu.be/3e6Xfnr5ME8",
        "description":"Linked list Append"
        
    },
    {
        "name":"Linked List",
        "url":"https://youtu.be/TRG75kJ2lhk",
        "description":"Linked List in JavaScript for Beginners"

    },

  {  "name":"Data Structure",
"description":"Linked list",
"url":'https://youtu.be/15q-fLZqo_0'

    },
    {
        "name":"data Structure",
        "url":"https://youtu.be/3e6Xfnr5ME8",
        "description":"Linked list Append"
        
    },
    {
        "name":"Linked List",
        "url":"https://youtu.be/TRG75kJ2lhk",
        "description":"Linked List in JavaScript for Beginners"

    },
    {
        "name":"data Structure",
        "url":"https://youtu.be/3e6Xfnr5ME8",
        "description":"Linked list Append"
        
    },
    {
        "name":"Linked List",
        "url":"https://youtu.be/TRG75kJ2lhk",
        "description":"Linked List in JavaScript for Beginners"

    },
    
  {  "name":"Data Structure",
"description":"Linked list",
"url":'https://youtu.be/15q-fLZqo_0'

    },
    {
        "name":"data Structure",
        "url":"https://youtu.be/3e6Xfnr5ME8",
        "description":"Linked list Append"
        
    },
    {
        "name":"Linked List",
        "url":"https://youtu.be/TRG75kJ2lhk",
        "description":"Linked List in JavaScript for Beginners"

    },
    {
        "name":"data Structure",
        "url":"https://youtu.be/3e6Xfnr5ME8",
        "description":"Linked list Append"
        
    },
    {
        "name":"Linked List",
        "url":"https://youtu.be/TRG75kJ2lhk",
        "description":"Linked List in JavaScript for Beginners"

    },
    
  {  "name":"Data Structure",
"description":"Linked list",
"url":'https://youtu.be/15q-fLZqo_0'

    },
    {
        "name":"data Structure",
        "url":"https://youtu.be/3e6Xfnr5ME8",
        "description":"Linked list Append"
        
    },
    {
        "name":"Linked List",
        "url":"https://youtu.be/TRG75kJ2lhk",
        "description":"Linked List in JavaScript for Beginners"

    },
    {
        "name":"data Structure",
        "url":"https://youtu.be/3e6Xfnr5ME8",
        "description":"Linked list Append"
        
    },
    {
        "name":"Linked List",
        "url":"https://youtu.be/TRG75kJ2lhk",
        "description":"Linked List in JavaScript for Beginners"

    },
    
  {  "name":"Data Structure",
"description":"Linked list",
"url":'https://youtu.be/15q-fLZqo_0'

    },
    {
        "name":"data Structure",
        "url":"https://youtu.be/3e6Xfnr5ME8",
        "description":"Linked list Append"
        
    },
    {
        "name":"Linked List",
        "url":"https://youtu.be/TRG75kJ2lhk",
        "description":"Linked List in JavaScript for Beginners"

    }
]
  
  return (
    <div>




<h1>Video Player</h1>
<Grid container spacing={2}>
            {videoDetails.map((ele)=>
                <>
            
    <Grid item xs={12} sm={6} md={4} spacing={2}  >
            <ReactPlayer url={ele.url} width="300" height='500' />
            <a href={ele.url}  >Name:{ele.name}</a><br/>
            <Button>Share</Button>
            <Button>Like</Button>
            <Button>Dislike</Button>
            </Grid>
            </>
            )}
</Grid>

    </div>
  )
}

export default VideoPlayer