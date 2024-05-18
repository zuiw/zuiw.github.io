
let tags = {};

    
if(!tags['notice']){
    tags['notice'] = [{
        date: '2024-05-15',
        title: '我的网站的第一篇博客',
        tag: 'notice'
    }]
} else {
    if(Array.isArray(tags['notice'])) {
        tags['notice'].push({
            date: '2024-05-15',
            title: '我的网站的第一篇博客',
            tag: 'notice'
        })
    } else {
        tags['notice'] = [tags['notice'], {
            date: '2024-05-15',
            title: '我的网站的第一篇博客',
            tag: 'notice'
        }]
    }
}


if(!tags['web']){
    tags['web'] = [{
        date: '2024-05-28',
        title: '如何搭建个人博客',
        tag: 'web'
    }]
} else {
    if(Array.isArray(tags['web'])) {
        tags['web'].push({
            date: '2024-05-28',
            title: '如何搭建个人博客',
            tag: 'web'
        })
    } else {
        tags['web'] = [tags['web'], {
            date: '2024-05-28',
            title: '如何搭建个人博客',
            tag: 'web'
        }]
    }
}

