FROM kasmweb/almalinux-9-desktop:develop

USER 0

RUN dnf update -y  && \
    dnf install -y sudo mtr telnet tmux zsh htop && \
    dnf groupinstall -y  'Development Tools' && \
    echo "kasm-user   ALL = (ALL) NOPASSWD: ALL" > /etc/sudoers.d/users

# Userspace Runtime
#ENV HOME /home/kasm-user
#WORKDIR $HOME
USER 1000

#CMD ["--tail-log"]
