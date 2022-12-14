class Api::MessagesController < ApplicationController
    def chat_index
        @messages = Message.where(chat_id: params[:id]).order('messages.created_at')
        render :index
    end

    def channel_index
        @messages = Message.where(channel_id: params[:id]).order('messages.created_at')
        render :index

    end
    def create
        @message = Message.new_message(message_params)
        if @message.save!
            render :show
            # render json: @message, status: :created
        end
    end

    def update
        @message = Message.find(params[:id])

        if @message
            if @message.update(message_params)
                render :show
            # else
            #     render json: { errors: @message.errors.full_messages}
            end
        end
    end

    def destroy
        @message = Message.find(params[:id])
        if @message
            @message.destroy
            render json: {mesage: 'message deleted'}
        else
            render json: { errors: @message.errors.full_messages }
        end
    end

    private

    def message_params
        params.require(:message).permit(:sender_id, :chat_id, :body, :channel_id)
    end

end
