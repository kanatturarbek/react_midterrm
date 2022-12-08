from rest_framework import serializers

from api.models import *

class AnimeSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only = True)
    title = serializers.CharField()
    description = serializers.CharField()
    imgurl = serializers.CharField()
    likes = serializers.IntegerField()

    class Meta:
        model = Anime
        fields = '__all__'

    def create(self, validated_data):
        anime = Anime.objects.create(
            title = validated_data['title'],
            description = validated_data['description'],
            imgurl = validated_data['imgurl'],
            likes = validated_data['likes']
        )

        return anime
    
    def update(self, instance, validated_data):
        instance.title = validated_data['title']
        instance.description = validated_data['description']
        instance.imgurl = validated_data['imgurl']
        instance.likes = validated_data['likes']
        instance.save()

        return instance

        