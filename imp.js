// import File System Module
import fs from "fs"; 
  
// import xml2js Module
import { parseString } from "xml2js"; 
  
//xml data
var xmldata = '<?xml version=”1.0" encoding=”UTF-8"?>' +

<ticket>
 <id>35436</id>
 <created_at>2015-07-20T22:55:29Z</created_at>
 <updated_at>2016-05-05T10:38:52Z</updated_at>
  ...
 <submitter>Michael_bolton@selu.edu</submitter>
 <assignee_id>23532</assignee_id>
 <follower_ids>
<id>235323</id>
<id>234</id> 
 </follower_ids>
  ...
</ticket>

  
// parsing xml data
parseString(xmldata, function (err, results) {
  
// parsing to json
let data = JSON.stringify(results)
  
// display the json data
console.log("results",data);
});
