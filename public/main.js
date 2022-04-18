getCSS.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET', '/style.css')
    request.onreadystatechange = ()=>{
        if(request.readyState === 4){ 
            if(request.status >= 200 && request.status < 300){
                //创建 style 标签
                const style = document.createElement('style')
                //填写 style 内容
                style.innerHTML = request.response
                //把 style 标签插入到 head 里
                document.head.appendChild(style)
            } else {
                alert('加载 css 失败')
            }
            
        }
    }
    request.send()
}

getJS.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET', '/2.js')
    request.onreadystatechange = ()=>{
        if(request.readyState === 4 && request.status >= 200 && request.status < 300){
            //创建 script 标签
            const script = document.createElement('script')
            //填写 script 内容
            script.innerHTML = request.response
            //把script 标签插入body
            document.body.appendChild(script)
        }
    }
    request.send()
}

getHTML.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET', '/3.html')
    request.onreadystatechange = ()=>{
        if(request.readyState === 4 && request.status >= 200 && request.status < 300){
            console.log(request.response)
            //创建 div 标签
            const div = document.createElement('div')
            //填写 div 内容
            div.innerHTML = request.response
            //把 div 标签插入body
            document.body.appendChild(div)
        }
    }
    request.send()
}

 
getXML.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET', '/4.xml')
    request.onreadystatechange = ()=>{
        if(request.readyState === 4){
            if(request.status >= 200 && request.status < 300){
                const dom = request.responseXML
                const text = dom.getElementsByTagName('warning')[0].textContent
                console.log(text.trim())
            } else{
                alert('加载 xml 失败')
            }
        }
    }
    request.send()
}

getJSON.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET', '/5.json')
    request.onreadystatechange = ()=>{
        if(request.readyState === 4){
            if(request.status >=200 && request.status < 300){
                console.log(request.response)
                const object = JSON.parse(request.response)
                console.log(object)
                myName.textContent = object.name
            } else{
                alert('加载 json 失败')
            }
        }
    }
    request.send()
}

let n = 1 //避免重复添加
getPages.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET', `/page${n+1}.json`) 
    request.onreadystatechange = ()=>{
        if(request.readyState === 4 && request.status >= 200 && request.status < 300){
            const result = JSON.parse(request.response)
            result.forEach((item)=>{
                const li = document.createElement('li')
                li.textContent = item.id
                xxx.appendChild(li)
            })
            n+=1 //加载成功之后，就让n加1
        }
    }
    request.send()
}
















