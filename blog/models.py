from django.db import models
from django.contrib.auth.models import User


STATUS = (
    (0, "Draft"),
    (1, "Publish")
)


class Post(models.Model):
    title = models.CharField(max_length=200, unique=True)
    slug = models.SlugField(max_length=200, unique=True)
    author = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='blog_posts')
    updated_on = models.DateTimeField(auto_now=True)
    content = models.TextField()
    created_on = models.DateTimeField(auto_now_add=True)
    status = models.IntegerField(choices=STATUS, default=0)

    class Meta:
        '''内部类 class Meta 用于给 model 定义元数据'''
        # # '-created' 表明数据应该以倒序排列
        ordering = ['-created_on']

    def __str__(self):
        '''函数 __str__ 定义当调用对象的 str() 方法时的返回值内容'''
        # return self.title 将文章标题返回
        return self.title
