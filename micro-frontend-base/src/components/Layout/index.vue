<template>
    <el-container>
        <el-header style="padding: 0;">
            <el-menu class="el-menu-demo" mode="horizontal" background-color="#545c64" text-color="#fff"
                active-text-color="#ffd04b"   @select="handleSelect">
                <el-menu-item index="/app-vue/index" @clikc="gotoUrl('/app-vue/index')">子应用1</el-menu-item>
                <el-menu-item index="/app-react/index" @clikc="gotoUrl('/app-react/index')">子应用2</el-menu-item>
            </el-menu>
        </el-header>
        <div id="page-main-container">
            <RouterView></RouterView>
        </div>
    </el-container>
</template>
<script setup lang="ts">
 
 
 
const handleSelect=(key:string)=>{
    gotoUrl(key);
    console.log('跳转',key)
}
const gotoUrl=(url:string)=>{
    console.log('跳转',url)
    history.pushState(null, url, url);
}
 

 

</script>
