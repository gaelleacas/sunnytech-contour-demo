#!/usr/bin/env bash
kubectl delete ingress chocolatine -n chocolatine
kubectl delete ingress painchoc -n painchoc
kubectl delete ingress sunnytech-food -n sunnytech-food