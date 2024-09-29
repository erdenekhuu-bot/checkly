from django.db import models

# Create your models here.

class MashinData(models.Model):
    id = models.AutoField(primary_key=True)
    Niitelsen = models.CharField(max_length=100, default='')
    Uildverlegch = models.CharField(max_length=100, default='')
    Mark = models.CharField(max_length=100, default='')
    Motor_bagtaamj = models.CharField(max_length=100, default='')
    Xrop = models.CharField(max_length=100, default='')
    Joloo = models.CharField(max_length=100, default='')
    Torol = models.CharField(max_length=100, null=True, blank=True)
    Ungu = models.CharField(max_length=100, null=True, blank=True)
    Uildverlesen_on = models.IntegerField(null=True, blank=True)
    Orj_irsen_on = models.IntegerField(default=0)
    Hudulguur = models.CharField(max_length=100, default='')
    Dotor_ungu = models.CharField(max_length=100, null=True, blank=True)
    Lizeng = models.CharField(max_length=100, null=True, blank=True)
    Hayg = models.CharField(max_length=100, null=True, blank=True)
    Hutlugch = models.CharField(max_length=100, null=True, blank=True)
    Yavsan_km = models.CharField(max_length=100, null=True, blank=True)
    Nomer = models.CharField(max_length=100, null=True, blank=True)
    Haalga = models.CharField(max_length=100, null=True, blank=True)
    Une = models.IntegerField(default=0)
    Unique_id = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'mashin_data'
    
    def __str__(self):
        return f'{self.Uildverlegch}, {self.Mark}, {self.Motor_bagtaamj}, {self.Xrop}, {self.Torol}, {self.Uildverlesen_on}, {self.Hudulguur}, {self.Hutlugch}, {self.Yavsan_km}'
