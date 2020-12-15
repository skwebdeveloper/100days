<html>
<head></head>
<body>
<style>
.flex-container, .main__ul{
  display: flex;
  list-style: none;
  flex-grow: row wrap;
}
.flex-item, .inside__ul{
  width: 100%;
  display: flex;
  height: 100px;
  font-size: 2rem;
  text-align:center;
  align-items: center;
  justify-content: center;
}
.inside__ul{
  background-color:black;
  color:white;
}

.flex_item_left{
  background-color: yellow;
}
.flex_item_right{
  background-color: pink;
}

@media only screen and (max-width: 700px){
  .flex-container{
    flex-grow: row wrap;
    flex-direction: column;  
  }
}

.sidebar{
  list-style:none;
  display: flex;
  flex-direction: column;
  justify-content:center;
}

</style>
<ul class="flex-container">
  <li class="flex-item flex_item_left">1</li>
  <li class="flex-item flex_item_left">2</li>
  <li class="flex-item flex_item_right">3</li>
  <li class="flex-item flex_item_right">4</li>
</ul>


<ul class="main__ul">
  <li class="inside__ul">1</li>
  <li class="inside__ul">2</li>
  <li class="inside__ul">3</li>
  <li class="inside__ul">4</li>
  <li class="inside__ul">5</li>
</ul>


<ul class="sidebar">
  <li class="inside__ul">1</li>
  <li class="inside__ul">2</li>
</ul>

</body>
</html>
