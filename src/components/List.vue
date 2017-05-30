<template lang="html">
    <div id="list">
        <div class="col-md-3" v-for="book in books">
            <div class="panel panel-warning">
                <div class="panel-heading">
                    书名：{{book.bookname}}
                </div>
                <div class="panel-body">
                    <img :src="book.cover" alt="">
                </div>
                <div class="panel-footer">
                    价格：{{book.price | currency('¥')}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name:'list',
  data() {
    return {books: null}
  },
  created() {
      this.$http.get('/book').then(res => {
          console.log(res);
          if(res.body) {
              this.books = res.body;
          }
      })
  },
  filters: {
      currency(val, param) {
          val = '' + parseFloat(val).toFixed(2);
          val = val.replace(/(\d)(?=(\d{3})+(\.|$))/g, '$1,');
          console.log(val);
          return param + val;
      }
  }
}
</script>

<style lang="less" scoped>
    #list {
      text-align: center;
       img {
          width:  150px;
          height: 200px;
       }
    }
</style>
