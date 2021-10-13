let cta = document.getElementById('cta');
let cba = document.getElementById('cba');
let displayTime = 4;
// let cta_html = '<iframe data-aa="1536871" src="//ad.a-ads.com/1536871?size=125x125" scrolling="no" style="width:125px; height:125px; border:0px; padding:0; overflow:hidden" allowtransparency="true"></iframe>';
let cta_html='';
let cba_html = '';
let i;
if(cta && cta_html)
{
  let html = '';

  for(i=0;i<displayTime;i++)
  {
    html += '<div class="is-pulled-left">' + cta_html + '</div>';
  }
  cta.innerHTML = html;
}
if(cba && cba_html)
{
  let html = '';
  for(i=0;i<displayTime;i++)
  {
    html += '<div class="is-pulled-left">' + cba_html + '</div>';
  }
  cba.innerHTML = html;
}
