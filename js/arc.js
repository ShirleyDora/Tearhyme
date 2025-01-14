
const srart_pos = 90.75;
const item_count = 13;
const s = 0.52 * Math.PI / 180; 

var pos = [];
var elem = document.getElementsByClassName('item');
 

function allocationItems() {
  var i;
  var pp = elem[6].getElementsByTagName('a')[0].getAttribute('data-img'); 
  document.getElementById("pic").style.backgroundImage = "url('"+pp+"')"; 
  document.getElementById("pic").className = "img-box";
  pos[0] = srart_pos;
  for (i = 1; i < item_count; i++) {
    pos[i] = pos[i - 1] - 0.2;
    last_pos=pos[i];
  }
  for (i = 0; i < item_count+1; i++) {
    elem[i].style.left = 240 + 250 * Math.sin(pos[i]) + 'px';
    elem[i].style.top = 240 + 250 * Math.cos(pos[i]) + 'px';
  }
}  

allocationItems();

function animation(args, flag) { 
    var $ = {
        radius: 250, 
        speed: 10 
    };
    var e = elem;
    document.getElementById("pic").className = "hide";    
    function animate(draw, duration, callback) {
        var start = performance.now();
        requestAnimationFrame(function animate(time) {
          
            var timePassed = time - start;
            console.log(time, start)
        
            if (timePassed > duration)
                timePassed = duration;
           
            draw(timePassed);
           
            if (timePassed < duration) {
                requestAnimationFrame(animate);
            } else callback();
        });
    }
    animate(function (timePassed) {
        var i;
        for (i = 0; i < item_count; i++) {
            e[i].style.left = 240 + $.radius * Math.sin(pos[i]) + 'px';
            e[i].style.top = 240 + $.radius * Math.cos(pos[i]) + 'px';
            if (flag) {
                pos[i] += s; 
            } else {
                pos[i] -= s; 
            }
        }   /* callback function */
    }, 400, function changeItems() {
        var list = document.getElementById('list');
        var ch = flag ? list.firstElementChild : list.lastElementChild
        ch.remove();
        if (flag) {
          list.appendChild(ch);
        } else {
          list.insertBefore(ch, list.firstChild);
        }
        allocationItems();
    });
}