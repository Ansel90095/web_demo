var canvas = document.getElementById('canvas');
if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    //Rect
    ctx.fillStyle = 'rgba(255,0,0,0.6)'; //(red,green,blue,alpha)
    ctx.fillRect(10, 10, 200, 100); //(左上角x,y,邊長x,邊長y)

    ctx.fillStyle = 'rgba(0,0,255,0.6)';
    ctx.fillRect(20, 20, 200, 100);

    ctx.clearRect(40, 40, 100, 50); //(左上角x,y,邊長x,邊長y)

    ctx.strokeRect(30, 30, 200, 100); //(左上角x,y,邊長x,邊長y)



    // 路徑須要先宣告
    // line+arc
    ctx.beginPath(); // 路徑須要先宣告
    ctx.moveTo(80, 80);
    // ctx.lineTo(120, 80);
    ctx.arc(80, 80, 40, 0, Math.PI / 3 * 2, true); //原點有線條自動連上arc.
    //arc(圓心x,y,r,起始角度,結束角度,順/逆)
    // ctx.lineTo(80, 80);
    ctx.closePath(); //自動頭尾連接
    ctx.stroke(); //畫上線條
    ctx.fillStyle = 'rgba(0,255,0,0.6)'; //指定顏色
    ctx.fill(); //填上顏色

    //line
    ctx.beginPath(); // 路徑須要先宣告
    ctx.moveTo(150, 150); //線條原點
    ctx.lineTo(155, 166); //第二點位置
    ctx.lineTo(140, 170);
    ctx.lineTo(130, 163);
    ctx.closePath();
    ctx.lineWidth = 5; //路徑線條粗度
    ctx.strokeStyle = 'red'; //線條顏色
    ctx.stroke(); //線條設定完成後,印出線條




    //Text

    ctx.textAlign = 'center'; // 設定文字水平對齊方式（start、end、left、right、center，預設為 start）

    ctx.textBaseline = 'middle'; // 設定文字垂直對齊方式（top、hanging、middle、alphabetic、ideographic、bottom，預設為 alphabetic）

    ctx.font = 'bold 30px "Microsoft JhengHei"'; // 設定文字大小、字體與粗體
    ctx.fillStyle = 'rgba(0,0,255,1)';
    ctx.fillText('Hellow World!', 300, 50) // 繪製填色文字
    ctx.lineWidth = 1; //初始設定是1
    ctx.strokeStyle = 'black';
    ctx.strokeText('text1848645', 300, 70) // 繪製路徑文字

    //Text的參考基準線
    ctx.beginPath();
    ctx.moveTo(300, 10);
    ctx.lineTo(300, 110);
    ctx.strokeStyle = 'rgba(100,150,100,1)';
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(300, 50);
    ctx.lineTo(450, 50);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(300, 70);
    ctx.lineTo(450, 70);
    ctx.stroke();

} else {
    console.log('Canvas Unsupported!');
}

// 
// 

var canvas = document.getElementById('my-canvas');
if (canvas.getContext) {
    var ctx = canvas.getContext('2d')

    const canvas_size = 500

    canvas.width = canvas_size
    canvas.height = canvas_size

    ctx.beginPath()
    for (let i = 0; i < canvas_size / 50; i++) {
        let pos = i * 50

        // X Axis
        ctx.moveTo(0, pos)
        ctx.lineTo(500, pos)
        ctx.fillText(pos, 0, pos)

        // Y Axis
        ctx.moveTo(pos, 0)
        ctx.lineTo(pos, 500)
        ctx.fillText(pos, pos, 10)
    }
    ctx.strokeStyle = 'gray'
    ctx.stroke()

    ctx.strokeStyle = 'red'
    ctx.strokeRect(50, 200, 50, 50);

} else {
    console.log('Canvas Unsupported!');
}