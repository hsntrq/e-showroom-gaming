from rest_framework import serializers
from .models import CustomUser, FileUpload, UserProfile


class LoginSerializer(serializers.Serializer):
    email = serializers.CharField()
    password = serializers.CharField()


class RegisterSerializer(serializers.Serializer):
    first_name = serializers.CharField()
    last_name = serializers.CharField()
    email = serializers.CharField()
    contact = serializers.CharField()
    password = serializers.CharField()


class RefreshSerializer(serializers.Serializer):
    refresh = serializers.CharField()


class CustomUserSerializer(serializers.ModelSerializer):

    class Meta:
        model = CustomUser
        exclude = ("password", )


class FileUploadSerializer(serializers.Serializer):

    class Meta:
        model = FileUpload
        fields = "__all__"


class UserProfileSerializer(serializers.ModelSerializer):

    user = CustomUserSerializer(read_only=True)
    user_id = serializers.IntegerField(write_only=True)
    profile_picture = FileUploadSerializer(read_only=True)
    profile_picture_id = serializers.IntegerField(
        write_only=True, required=False)

    class Meta:
        model = UserProfile
        fields = "__all__"

    def get_message_count(self, obj):
        try:
            user_id = self.context["request"].user.id
        except Exception as e:
            user_id = None

        from message_control.models import Message
        message = Message.objects.filter(
            sender_id=obj.user.id, receiver_id=user_id, is_read=False).distinct()

        return message.count()


class FavoriteSerializer(serializers.Serializer):
    favorite_id = serializers.IntegerField()
