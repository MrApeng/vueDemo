<template>
  <div >
    <el-container>
      <el-header>商城</el-header>
      <el-main>
        <transition>
          <router-view></router-view>
        </transition>
      </el-main>
      <el-footer>
        <el-row :gutter="30">
          <router-link to="/index">
            <el-col :span="8">
              <div class="grid-content bg-purple">
                <el-button icon ="el-icon-menu">
                  首页
                </el-button>
              </div>
            </el-col>
          </router-link>
          <router-link to="/cart">
            <el-col :span="8">
              <div class="grid-content bg-purple" >
                <el-badge :value="0" class="item">
                  <el-button  class="hhh" icon ="el-icon-goods" >购物车</el-button>
                </el-badge>
              </div>
            </el-col>
          </router-link>
          <router-link to="/my">
            <el-col :span="8">
              <div class="grid-content bg-purple">
                <el-button icon ="el-icon-service">我的</el-button>
              </div>
            </el-col>
          </router-link>
        </el-row>

      </el-footer>

    </el-container>
  </div>
</template>

<script>

</script>

<style>

</style>
