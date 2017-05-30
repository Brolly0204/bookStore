<template>
  <div id="add">
    <form>
      <div class="form-group">
        <label for="bookname" class="control-label">书名</label>
        <input type="text" id="bookname" class="form-control" placeholder="请输入书名">
      </div>
      <div class="form-group">
        <label for="cover" class="control-label">封面</label>
        <input type="text" id="cover" class="form-control" placeholder="请入封面链接">
      </div>
      <div class="form-group">
        <label for="price" class="control-label">价格</label>
        <input type="text" id="price" class="form-control" placeholder="请输入价格">
      </div>
      <button type="button" class="btn btn-primary">添加图书</button>
    </form>
  </div>
</template>
<script>
  export default {

  }
</script>
<style scoped>

</style>
