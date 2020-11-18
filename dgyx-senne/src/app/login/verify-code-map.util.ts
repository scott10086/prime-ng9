export class VerifyCodeMapUtil {

  initVerifyCode(verifyCode: string): string {
    const canvas = document.createElement('canvas');
    canvas.style.width = '120px';
    canvas.style.height = '40px';
    const context = canvas.getContext('2d'); // 获取画布2D上下文
    context.fillStyle = 'rgba(255, 255, 255, 0.4)'; // 画布填充色
    context.fillRect(0, 0, canvas.width, canvas.height); // 清空画布
    context.fillStyle = 'blue'; // 设置字体颜色
    context.font = '100px San Francisco'; // 设置字体

    const x = [10, 100, 180, 230];
    for (let i = 0; i < 4; i++) {
      context.fillText(verifyCode.charAt(i), x[i], this.randomNum(60, 140));
    }
    // 画3条随机线
    for (let i = 0; i < 3; i++) {
      this.drawline(canvas, context);
    }

    // 画30个随机点
    for (let i = 0; i < 30; i++) {
      this.drawDot(canvas, context);
    }
    return canvas.toDataURL('image/png');
  }

  private randomNum(Min, Max) {
    const Range = Max - Min;
    const Rand = Math.random();
    return Min + Math.round(Rand * Range);
  }

  private drawline(canvas, context) {
    context.moveTo(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height));
    context.lineTo(10, Math.floor(Math.random() * canvas.height));
    context.lineWidth = 3; // 随机线宽
    context.strokeStyle = 'rgba(50,50,50,0.3)'; // 随机线描边属性
    context.stroke();
  }

  // 随机点(所谓画点其实就是画1px像素的线，方法不再赘述)
  private drawDot(canvas, context) {
    const px = Math.floor(Math.random() * canvas.width);
    const py = Math.floor(Math.random() * canvas.height);
    context.moveTo(px, py);
    context.lineTo(px + 1, py + 1);
    context.lineWidth = 5;
    context.stroke();

  }

}
