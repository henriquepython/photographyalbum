import { createClient } from 'pexels';

const client = createClient('563492ad6f91700001000001d717ba1d15da4f06bcc63b3eb177e0ba');

client.photos.curated({ per_page: 15 }).then(photos => {...});

console.log(photos);

