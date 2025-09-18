<template>
    <el-container>
        <el-header style="padding: 0;">
            <el-menu class="el-menu-demo" mode="horizontal" background-color="#545c64" text-color="#fff"
                active-text-color="#ffd04b"   @select="handleSelect">
                <el-menu-item index="/main/first" @clikc="gotoUrl('/main/first')">子应用1</el-menu-item>
                <el-menu-item index="/main/second" @clikc="gotoUrl('/main/second')">子应用2</el-menu-item>
            </el-menu>
        </el-header>
        <div id="container">
            <RouterView></RouterView>
        </div>
    </el-container>
</template>
<script setup lang="ts">
 
 
 
// const handleSelect=(key:string)=>{
//     gotoUrl(key);
//     console.log('跳转',key)
// }
// const gotoUrl=(url:string)=>{
//     console.log('跳转',url)
//     history.pushState(null, url, url);
// }
 

 

</script>
